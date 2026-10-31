// Comprehensive Verification Script for MongoDB Integration
// Verifies all 7 checklist items requested by the user

const http = require('http');

const BACKEND_URL = 'http://localhost:5000';
const FRONTEND_URL = 'http://localhost:5173';
const ADMIN_KEY = 'dhakshith_admin_secret_2026';

function request(url, options = {}, postData = null) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const reqOptions = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.pathname + parsedUrl.search,
      method: options.method || 'GET',
      headers: options.headers || {}
    };

    if (postData) {
      reqOptions.headers['Content-Type'] = 'application/json';
      reqOptions.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = http.request(reqOptions, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        let parsed = null;
        try {
          parsed = JSON.parse(body);
        } catch (e) {
          parsed = body;
        }
        resolve({ status: res.statusCode, headers: res.headers, data: parsed });
      });
    });

    req.on('error', (err) => reject(err));

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function runTests() {
  console.log('================================================================');
  console.log('  DHAKSHITH BAVAN S – MONGODB INTEGRATION VERIFICATION SUITE   ');
  console.log('================================================================\n');

  let passed = 0;
  let total = 7;

  // -------------------------------------------------------------------------
  // Check 1: All three projects are stored in MongoDB
  // -------------------------------------------------------------------------
  console.log('👉 [Check 1/7] Verifying all 3 academic projects are stored in MongoDB...');
  try {
    const res = await request(`${BACKEND_URL}/api/projects`);
    if (res.status === 200 && res.data.source === 'database' && res.data.count >= 3) {
      console.log(`   ✓ MongoDB Projects count: ${res.data.count}`);
      console.log(`   ✓ Source confirmed as: "${res.data.source}"`);
      res.data.data.forEach((p, idx) => {
        console.log(`     ${idx + 1}. [${p._id}] ${p.title} (${p.category})`);
      });
      passed++;
      console.log('   ✅ PASS: Check 1 verified.\n');
    } else {
      console.error('   ❌ FAIL: Projects not correctly loaded from MongoDB database', res.data);
    }
  } catch (err) {
    console.error('   ❌ FAIL: Network/DB error on Check 1:', err.message);
  }

  // -------------------------------------------------------------------------
  // Check 2: React retrieves projects through Express APIs
  // -------------------------------------------------------------------------
  console.log('👉 [Check 2/7] Verifying React retrieves projects via Express /api proxy...');
  try {
    const feRes = await request(`${FRONTEND_URL}/api/projects`);
    if (feRes.status === 200 && feRes.data.success && feRes.data.data.length >= 3) {
      console.log(`   ✓ Vite Dev Proxy (http://localhost:5173/api/projects) returned status: ${feRes.status}`);
      console.log(`   ✓ Frontend successfully received ${feRes.data.data.length} projects from backend`);
      passed++;
      console.log('   ✅ PASS: Check 2 verified.\n');
    } else {
      console.error('   ❌ FAIL: Frontend proxy did not return expected projects', feRes);
    }
  } catch (err) {
    console.error('   ❌ FAIL: Check 2 error connecting through Vite proxy:', err.message);
  }

  // -------------------------------------------------------------------------
  // Check 3: New projects can be added by an authorized admin
  // -------------------------------------------------------------------------
  console.log('👉 [Check 3/7] Verifying adding new project (authorized admin vs unauthorized)...');
  let newProjectId = null;
  try {
    // 3a. Unauthorized attempt should fail with 401
    const unauthRes = await request(`${BACKEND_URL}/api/projects`, {
      method: 'POST'
    }, JSON.stringify({
      title: 'Unauthorized Test Project',
      summary: 'Should be rejected',
      description: 'Should be rejected without admin secret key'
    }));

    if (unauthRes.status === 401) {
      console.log(`   ✓ Protected Endpoint: Request without x-admin-key correctly rejected with HTTP 401 Unauthorized`);
    } else {
      console.error(`   ❌ FAIL: Expected 401 Unauthorized, got ${unauthRes.status}`);
    }

    // 3b. Authorized attempt with x-admin-key
    const newProjectPayload = {
      title: 'Autonomous Visual Inspection Drone',
      category: 'AI & Computer Vision',
      technologies: ['Python', 'YOLOv11', 'OpenCV', 'ROS'],
      summary: 'Edge-AI quadcopter prototype for automated defect identification in industrial infrastructures.',
      description: 'Built a lightweight edge-AI vision system deployed on an onboard computing module.',
      features: [
        'Real-time crack detection',
        'Visual odometry pipeline',
        'Low-latency telemetry streaming'
      ],
      isExperimental: true,
      disclaimer: 'Academic prototype developed for laboratory evaluation.',
      githubUrl: 'https://github.com/dhakshithbavan',
      liveUrl: '',
      order: 4
    };

    const authRes = await request(`${BACKEND_URL}/api/projects`, {
      method: 'POST',
      headers: {
        'x-admin-key': ADMIN_KEY
      }
    }, JSON.stringify(newProjectPayload));

    if (authRes.status === 201 && authRes.data.success && authRes.data.data._id) {
      newProjectId = authRes.data.data._id;
      console.log(`   ✓ Authorized Creation Succeeded: HTTP 201 Created`);
      console.log(`   ✓ Created MongoDB Document ID: ${newProjectId}`);
      console.log(`   ✓ Saved Title: "${authRes.data.data.title}"`);
      passed++;
      console.log('   ✅ PASS: Check 3 verified.\n');
    } else {
      console.error('   ❌ FAIL: Admin project creation failed:', authRes);
    }
  } catch (err) {
    console.error('   ❌ FAIL: Check 3 error:', err.message);
  }

  // -------------------------------------------------------------------------
  // Check 4: Existing projects can be edited
  // -------------------------------------------------------------------------
  console.log('👉 [Check 4/7] Verifying existing projects can be edited (PUT /api/projects/:id)...');
  try {
    if (!newProjectId) throw new Error('No project ID available to edit');

    const updatePayload = {
      title: 'Autonomous Visual Inspection Drone v2 (Optimized)',
      technologies: ['Python', 'YOLOv11', 'OpenCV', 'ROS', 'TensorRT'],
      summary: 'Updated: Edge-AI quadcopter prototype with TensorRT acceleration.'
    };

    const updateRes = await request(`${BACKEND_URL}/api/projects/${newProjectId}`, {
      method: 'PUT',
      headers: {
        'x-admin-key': ADMIN_KEY
      }
    }, JSON.stringify(updatePayload));

    if (updateRes.status === 200 && updateRes.data.success) {
      console.log(`   ✓ Updated project returned HTTP 200 OK`);
      console.log(`   ✓ Updated Title: "${updateRes.data.data.title}"`);
      console.log(`   ✓ Updated Technologies: ${updateRes.data.data.technologies.join(', ')}`);
      
      // Fetch to double verify persistence in MongoDB
      const verifyGet = await request(`${BACKEND_URL}/api/projects/${newProjectId}`);
      if (verifyGet.status === 200 && verifyGet.data.data.title === updatePayload.title) {
        console.log(`   ✓ Persisted update confirmed via GET /api/projects/${newProjectId}`);
        passed++;
        console.log('   ✅ PASS: Check 4 verified.\n');
      } else {
        console.error('   ❌ FAIL: Update not reflected on GET', verifyGet);
      }
    } else {
      console.error('   ❌ FAIL: Update request failed', updateRes);
    }
  } catch (err) {
    console.error('   ❌ FAIL: Check 4 error:', err.message);
  }

  // -------------------------------------------------------------------------
  // Check 5: Projects can be deleted by an authorized admin
  // -------------------------------------------------------------------------
  console.log('👉 [Check 5/7] Verifying project deletion by authorized admin (DELETE /api/projects/:id)...');
  try {
    if (!newProjectId) throw new Error('No project ID available to delete');

    // 5a. Unauthorized attempt should fail with 401
    const unauthDel = await request(`${BACKEND_URL}/api/projects/${newProjectId}`, {
      method: 'DELETE'
    });
    if (unauthDel.status === 401) {
      console.log(`   ✓ Unauthorized DELETE correctly blocked with HTTP 401 Unauthorized`);
    } else {
      console.error(`   ❌ FAIL: Expected 401 Unauthorized for DELETE, got ${unauthDel.status}`);
    }

    // 5b. Authorized DELETE
    const authDel = await request(`${BACKEND_URL}/api/projects/${newProjectId}`, {
      method: 'DELETE',
      headers: {
        'x-admin-key': ADMIN_KEY
      }
    });

    if (authDel.status === 200 && authDel.data.success) {
      console.log(`   ✓ Project deleted successfully: "${authDel.data.message}"`);

      // Verify it's no longer found
      const afterDel = await request(`${BACKEND_URL}/api/projects/${newProjectId}`);
      if (afterDel.status === 404) {
        console.log(`   ✓ GET after deletion returned HTTP 404 Not Found as expected`);
        passed++;
        console.log('   ✅ PASS: Check 5 verified.\n');
      } else {
        console.error(`   ❌ FAIL: Expected 404 after deletion, got ${afterDel.status}`);
      }
    } else {
      console.error('   ❌ FAIL: Authorized DELETE failed', authDel);
    }
  } catch (err) {
    console.error('   ❌ FAIL: Check 5 error:', err.message);
  }

  // -------------------------------------------------------------------------
  // Check 6: Contact form messages are stored in MongoDB
  // -------------------------------------------------------------------------
  console.log('👉 [Check 6/7] Verifying contact form messages are stored in MongoDB contacts collection...');
  try {
    const contactPayload = {
      name: 'Dr. Anand Kumar',
      email: 'anand.kumar@researchlab.edu',
      phone: '+91 9876543210',
      subject: 'Computer Vision Research Collaboration',
      message: 'Hello Dhakshith, I reviewed your Context-Aware Workspace Organizer project and would like to discuss a research internship collaboration.'
    };

    const contactRes = await request(`${BACKEND_URL}/api/contact`, {
      method: 'POST'
    }, JSON.stringify(contactPayload));

    if (contactRes.status === 201 && contactRes.data.success) {
      console.log(`   ✓ Contact submission succeeded: HTTP 201 Created`);
      console.log(`   ✓ Stored Document ID: ${contactRes.data.data.id}`);

      // Verify the message exists in the contacts collection via GET /api/contact/messages
      const messagesRes = await request(`${BACKEND_URL}/api/contact/messages`);
      if (messagesRes.status === 200 && messagesRes.data.success) {
        const found = messagesRes.data.data.find(m => m.email === contactPayload.email.toLowerCase());
        if (found) {
          console.log(`   ✓ Verified message saved in MongoDB contacts collection:`);
          console.log(`     From: ${found.name} <${found.email}> | Subject: "${found.subject}"`);
          console.log(`     Timestamp: ${found.createdAt}`);
          passed++;
          console.log('   ✅ PASS: Check 6 verified.\n');
        } else {
          console.error('   ❌ FAIL: Submitted contact not found in MongoDB contacts collection', messagesRes.data);
        }
      } else {
        console.error('   ❌ FAIL: Could not retrieve contacts messages', messagesRes);
      }
    } else {
      console.error('   ❌ FAIL: Contact submission failed', contactRes);
    }
  } catch (err) {
    console.error('   ❌ FAIL: Check 6 error:', err.message);
  }

  // -------------------------------------------------------------------------
  // Check 7: Database errors are handled correctly
  // -------------------------------------------------------------------------
  console.log('👉 [Check 7/7] Verifying robust database error handling (CastError, ValidationError, NotFound)...');
  let errChecksPassed = 0;
  const totalErrChecks = 4;

  try {
    // 7a. Malformed ObjectId -> 400 Bad Request (CastError)
    const castRes = await request(`${BACKEND_URL}/api/projects/invalid-id-xyz-12345`);
    if (castRes.status === 400 && castRes.data.error.includes('Invalid project ID format')) {
      console.log(`   ✓ CastError handled: HTTP 400 with message "${castRes.data.error}"`);
      errChecksPassed++;
    } else {
      console.error(`   ❌ FAIL: CastError check failed, status ${castRes.status}:`, castRes.data);
    }

    // 7b. Valid ObjectId but non-existent -> 404 Not Found
    const validHexNonExistentId = '6630f9a2b7e12c4d98a00000';
    const notFoundRes = await request(`${BACKEND_URL}/api/projects/${validHexNonExistentId}`);
    if (notFoundRes.status === 404) {
      console.log(`   ✓ Non-existent ID handled: HTTP 404 with message "${notFoundRes.data.error}"`);
      errChecksPassed++;
    } else {
      console.error(`   ❌ FAIL: Non-existent ID check failed, status ${notFoundRes.status}:`, notFoundRes.data);
    }

    // 7c. Missing required fields on project creation -> 400 Bad Request
    const missingFieldRes = await request(`${BACKEND_URL}/api/projects`, {
      method: 'POST',
      headers: { 'x-admin-key': ADMIN_KEY }
    }, JSON.stringify({
      category: 'AI'
      // missing title, summary, description
    }));
    if (missingFieldRes.status === 400 && missingFieldRes.data.error) {
      console.log(`   ✓ Project ValidationError handled: HTTP 400 with message "${missingFieldRes.data.error}"`);
      errChecksPassed++;
    } else {
      console.error(`   ❌ FAIL: Missing field validation check failed, status ${missingFieldRes.status}:`, missingFieldRes.data);
    }

    // 7d. Invalid email format on contact submission -> 400 Bad Request
    const invalidContactRes = await request(`${BACKEND_URL}/api/contact`, {
      method: 'POST'
    }, JSON.stringify({
      name: 'Test User',
      email: 'not-an-email',
      message: 'This message is long enough to pass message length validation.'
    }));
    if (invalidContactRes.status === 400 && invalidContactRes.data.error.includes('valid email')) {
      console.log(`   ✓ Contact email ValidationError handled: HTTP 400 with message "${invalidContactRes.data.error}"`);
      errChecksPassed++;
    } else {
      console.error(`   ❌ FAIL: Invalid email check failed, status ${invalidContactRes.status}:`, invalidContactRes.data);
    }

    if (errChecksPassed === totalErrChecks) {
      passed++;
      console.log('   ✅ PASS: Check 7 verified (All 4 error cases handled gracefully).\n');
    } else {
      console.error(`   ❌ FAIL: Only ${errChecksPassed}/${totalErrChecks} error cases passed.`);
    }

  } catch (err) {
    console.error('   ❌ FAIL: Check 7 error:', err.message);
  }

  // -------------------------------------------------------------------------
  // Summary
  // -------------------------------------------------------------------------
  console.log('================================================================');
  console.log(`  VERIFICATION RESULTS: ${passed}/${total} CHECKS PASSED`);
  console.log('================================================================\n');

  if (passed === total) {
    console.log('🎉 All 7 MongoDB integration requirements are fully verified and working perfectly!');
    process.exit(0);
  } else {
    console.error(`⚠️ ${total - passed} check(s) did not pass. Inspect logs above.`);
    process.exit(1);
  }
}

runTests().catch(console.error);

