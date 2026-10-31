const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Page 1: Header, Summary, Education, Internship, Technical Skills
  // Page 2: Academic Projects, Certifications, Languages
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Helper colors
  const primaryColor = rgb(0.05, 0.2, 0.45); // Deep Navy Blue
  const secondaryColor = rgb(0.25, 0.35, 0.7); // Indigo
  const textColor = rgb(0.15, 0.15, 0.18);
  const mutedColor = rgb(0.4, 0.4, 0.45);
  const lineColor = rgb(0.85, 0.88, 0.92);

  // Function to create a clean page
  let page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  let y = height - 40;
  const margin = 45;
  const contentWidth = width - margin * 2;

  function checkNewPage(neededSpace) {
    if (y - neededSpace < 40) {
      page = pdfDoc.addPage([595.28, 841.89]);
      y = height - 40;
    }
  }

  function drawSectionHeading(title) {
    checkNewPage(40);
    y -= 12;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    y -= 5;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 1.5,
      color: secondaryColor,
    });
    y -= 14;
  }

  // --- HEADER ---
  page.drawText('DHAKSHITH BAVAN S', {
    x: margin,
    y,
    size: 22,
    font: fontBold,
    color: primaryColor,
  });
  y -= 16;

  page.drawText('AI/ML Developer | Computer Vision Enthusiast | B.Tech CSE (AI) Student', {
    x: margin,
    y,
    size: 10.5,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 14;

  const contactInfo = 'Email: dhakshithbavan1004@gmail.com  |  Phone: +91 9025069558  |  Location: Krishnagiri, Tamil Nadu, India';
  page.drawText(contactInfo, {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: mutedColor,
  });
  y -= 8;

  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 0.75,
    color: lineColor,
  });
  y -= 10;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeading('Professional Summary');
  const summaryText =
    'B.Tech Computer Science (AI) student with hands-on experience in data handling, computer vision, and AI-based projects, backed by an internship in Data Science, AI and Machine Learning. Eager to build practical solutions and grow through collaborative, applied learning.';
  
  // Wrap text
  function drawWrappedText(text, fontSize = 9, font = fontRegular, color = textColor, lineSpacing = 13) {
    const words = text.split(' ');
    let currentLine = '';
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > contentWidth) {
        checkNewPage(lineSpacing);
        page.drawText(currentLine, { x: margin, y, size: fontSize, font, color });
        y -= lineSpacing;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      checkNewPage(lineSpacing);
      page.drawText(currentLine, { x: margin, y, size: fontSize, font, color });
      y -= lineSpacing;
    }
  }

  drawWrappedText(summaryText, 9, fontRegular, textColor, 13);
  y -= 4;

  // --- EDUCATION ---
  drawSectionHeading('Education');

  // Degree 1
  page.drawText('B.Tech Computer Science (Artificial Intelligence)', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText('2024 – 2028  |  CGPA: 6.5', {
    x: width - margin - 130,
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 12;
  page.drawText('Karunya Institute of Technology and Sciences — Coimbatore, Tamil Nadu', {
    x: margin,
    y,
    size: 9,
    font: fontOblique,
    color: mutedColor,
  });
  y -= 14;

  // Degree 2
  page.drawText('Class XII (Higher Secondary Certificate)', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText('2024  |  Score: 72.83%', {
    x: width - margin - 130,
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 12;
  page.drawText('Sri Vijay Vidyalaya Matric Hr. Sec. School — Krishnagiri, Tamil Nadu', {
    x: margin,
    y,
    size: 9,
    font: fontOblique,
    color: mutedColor,
  });
  y -= 12;

  // --- INTERNSHIP EXPERIENCE ---
  drawSectionHeading('Internship Experience');
  page.drawText('Data Science, AI & ML Intern', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  page.drawText('20 May 2026 – 20 June 2026', {
    x: width - margin - 150,
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 12;
  page.drawText('iGeeks Technologies — Bangalore, India', {
    x: margin,
    y,
    size: 9,
    font: fontOblique,
    color: mutedColor,
  });
  y -= 14;

  const internshipBullets = [
    'Contributed to the R&D team\'s Data Science, AI and Machine Learning initiatives as part of a project team.',
    'Applied Python programming to real project tasks and strengthened core Data Science and Machine Learning fundamentals.',
    'Collaborated with team members and HR to complete assigned work on schedule.',
  ];

  for (const bullet of internshipBullets) {
    checkNewPage(14);
    page.drawText('•', { x: margin + 6, y, size: 9, font: fontBold, color: secondaryColor });
    const bulletWords = bullet.split(' ');
    let line = '';
    for (const w of bulletWords) {
      const test = line ? `${line} ${w}` : w;
      if (fontRegular.widthOfTextAtSize(test, 8.8) > contentWidth - 22) {
        page.drawText(line, { x: margin + 20, y, size: 8.8, font: fontRegular, color: textColor });
        y -= 12;
        line = w;
      } else {
        line = test;
      }
    }
    if (line) {
      page.drawText(line, { x: margin + 20, y, size: 8.8, font: fontRegular, color: textColor });
      y -= 13;
    }
  }

  // --- TECHNICAL SKILLS ---
  drawSectionHeading('Technical Skills');
  const skillsList = [
    { cat: 'Programming Languages', val: 'Python, Java, C' },
    { cat: 'AI, ML & Computer Vision', val: 'Computer Vision, YOLOv11, MediaPipe, Object Detection, Hand Tracking, Feature Extraction, Ensemble ML' },
    { cat: 'Tools & Platforms', val: 'Git, GitHub, Arduino, Android Studio, IoT and Bluetooth' },
    { cat: 'Core Fundamentals', val: 'Networking Basics, Cybersecurity Basics' },
    { cat: 'Soft Skills', val: 'Teamwork, Communication, Coordination, Problem-Solving' },
  ];

  for (const s of skillsList) {
    checkNewPage(14);
    page.drawText(`•  ${s.cat}: `, { x: margin, y, size: 8.8, font: fontBold, color: textColor });
    const catWidth = fontBold.widthOfTextAtSize(`•  ${s.cat}: `, 8.8);
    page.drawText(s.val, { x: margin + catWidth, y, size: 8.8, font: fontRegular, color: textColor });
    y -= 13;
  }

  // --- ACADEMIC PROJECTS ---
  drawSectionHeading('Academic Projects');

  const projects = [
    {
      title: 'Context-Aware Workspace Organizer: Optimizing Object Placement Based on User Workflow',
      tech: 'YOLOv11, MediaPipe, Streamlit, Python',
      desc: 'Built a vision-based system that detects objects such as books, laptops, and stationery using YOLOv11 and tracks hand-object interactions using MediaPipe to record usage frequency and dwell time. Features workflow-aware layout optimization recommendations based on co-usage patterns and reach distance with a real-time Streamlit dashboard.',
    },
    {
      title: 'HemoNail Detector – AI-Based Non-Invasive Hemoglobin Estimation (Experimental)',
      tech: 'Computer Vision, Feature Extraction, Ensemble Machine Learning, Python',
      desc: 'Developed an experimental non-invasive hemoglobin estimation prototype using smartphone images of fingernail beds and skin. Uses ROI color space extraction (RGB/HSV/LAB) and ensemble ML regression. Note: Academic research screening exploration, not a clinically certified medical tool.',
    },
    {
      title: 'GestureSpeak – Smart Gloves: Sign Language Detection',
      tech: 'Arduino, Bluetooth, Python, Android Studio, Sensors',
      desc: 'Built an IoT-based glove hardware system that translates sign language gestures into speech. Features flex sensor gesture detection on sensory gloves, Arduino hardware interfacing, Bluetooth serial communication, and an Android app with real-time text-to-speech functionality.',
    },
  ];

  for (const proj of projects) {
    checkNewPage(55);
    page.drawText(proj.title, { x: margin, y, size: 9.5, font: fontBold, color: primaryColor });
    y -= 12;
    page.drawText(`Technologies: ${proj.tech}`, { x: margin, y, size: 8.5, font: fontOblique, color: secondaryColor });
    y -= 12;
    drawWrappedText(proj.desc, 8.5, fontRegular, textColor, 11.5);
    y -= 6;
  }

  // --- CERTIFICATIONS ---
  drawSectionHeading('Certifications');
  const certs = [
    { org: 'Cisco', list: 'Python Programming, C Programming, Networking Basics, Introduction to Cybersecurity' },
    { org: 'Infosys', list: 'Ethics and Project Management, Java Programming Fundamentals' },
    { org: 'IBM', list: 'Artificial Intelligence Fundamentals' },
    { org: 'SkillForge', list: 'Artificial Intelligence with Python' },
  ];

  for (const c of certs) {
    checkNewPage(14);
    page.drawText(`•  ${c.org}: `, { x: margin, y, size: 8.8, font: fontBold, color: textColor });
    const oWidth = fontBold.widthOfTextAtSize(`•  ${c.org}: `, 8.8);
    page.drawText(c.list, { x: margin + oWidth, y, size: 8.8, font: fontRegular, color: textColor });
    y -= 13;
  }

  // --- LANGUAGES ---
  drawSectionHeading('Languages');
  checkNewPage(15);
  page.drawText('•  Telugu (Native)    •  Tamil (Professional Proficiency)    •  English (C1 Proficient)', {
    x: margin,
    y,
    size: 9,
    font: fontRegular,
    color: textColor,
  });

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(__dirname, '../../frontend/public/resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`✓ Resume PDF created successfully at: ${outputPath}`);
}

createResume().catch(err => {
  console.error('Error generating resume PDF:', err);
  process.exit(1);
});

