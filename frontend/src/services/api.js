// Centralized API Client for Dhakshith Bavan S Portfolio
const RAW_URL = import.meta.env.VITE_API_URL || '/api';
const BASE_URL = RAW_URL.replace(/\/+$/, '');

async function request(endpoint, options = {}) {
  const formattedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${BASE_URL}${formattedEndpoint}`;
  
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error ${response.status}`);
    }

    return data;
  } catch (error) {
    console.warn(`[API] Query to ${endpoint}:`, error.message);
    throw error;
  }
}

export const api = {
  checkHealth: async () => {
    try {
      return await request('/health');
    } catch {
      return { status: 'offline', database: { connected: false } };
    }
  },

  getProfile: async () => {
    return await request('/profile');
  },

  getEducation: async () => {
    return await request('/profile/education');
  },

  getSkills: async () => {
    return await request('/profile/skills');
  },

  getCertifications: async () => {
    return await request('/profile/certifications');
  },

  getProjects: async ({ category = 'All', search = '' } = {}) => {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.append('category', category);
    if (search) params.append('search', search);

    const qs = params.toString() ? `?${params.toString()}` : '';
    return await request(`/projects${qs}`);
  },

  getProjectById: async (id) => {
    return await request(`/projects/${id}`);
  },

  submitContact: async (formData) => {
    return await request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }
};
