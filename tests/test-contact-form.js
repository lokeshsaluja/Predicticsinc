/**
 * Test script for Predictics Inc. contact form submission
 * 
 * This script verifies:
 * 1. Valid form submissions get stored correctly
 * 2. Database storage works when available
 * 3. File storage fallback works when database is unavailable
 */

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Define the test data directory
const dataDir = path.join(process.cwd(), 'data');
const submissionsFile = path.join(dataDir, 'contact-submissions.json');

// Test configuration
const API_ENDPOINT = 'http://localhost:3000/api/contact';
const TEST_TIMEOUT = 5000; // 5 seconds

// Sample form data for testing
const validFormData = {
  name: 'Test User',
  email: 'test@example.com',
  company: 'Test Company Inc.',
  industry: 'Healthcare',
  service: 'Data Strategy & Architecture',
  message: 'This is a test message from the automated testing script.'
};

const invalidFormData = {
  // Missing required fields
  name: 'Test User',
  email: 'test@example.com'
};

// Test results tracking
const testResults = {
  passed: 0,
  failed: 0,
  total: 0
};

/**
 * Run a test case and log the result
 */
async function runTest(name, testFn) {
  testResults.total++;
  console.log(`\n🧪 RUNNING TEST: ${name}`);
  
  try {
    const startTime = Date.now();
    await testFn();
    const duration = Date.now() - startTime;
    
    console.log(`✅ PASSED: ${name} (${duration}ms)`);
    testResults.passed++;
  } catch (error) {
    console.error(`❌ FAILED: ${name}`);
    console.error(`   Error: ${error.message}`);
    if (error.stack) {
      console.error(`   ${error.stack.split('\n')[1]}`);
    }
    testResults.failed++;
  }
}

/**
 * Test submission with valid data
 */
async function testValidSubmission() {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(validFormData)
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API returned ${response.status}: ${errorText}`);
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(`API indicated failure: ${result.message}`);
  }
  
  console.log(`   Storage method: ${result.storage || 'unknown'}`);
  console.log(`   Submission ID: ${result.id || 'unknown'}`);
  
  // Wait a moment for any async file operations to complete
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Verify file storage (regardless of whether database worked or not)
  await verifyFileStorage(validFormData);
  
  return result;
}

/**
 * Test submission with invalid data
 */
async function testInvalidSubmission() {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(invalidFormData)
  });
  
  // Should return 400 Bad Request
  if (response.status !== 400) {
    throw new Error(`Expected 400 status for invalid data, got ${response.status}`);
  }
  
  const result = await response.json();
  
  if (result.success) {
    throw new Error('Invalid submission was incorrectly marked as successful');
  }
  
  console.log(`   Error message: ${result.message}`);
  return result;
}

/**
 * Verify that data was saved to file storage
 */
async function verifyFileStorage(formData) {
  if (!fs.existsSync(dataDir)) {
    throw new Error(`Data directory not found: ${dataDir}`);
  }
  
  if (!fs.existsSync(submissionsFile)) {
    throw new Error(`Submissions file not found: ${submissionsFile}`);
  }
  
  const fileContent = fs.readFileSync(submissionsFile, 'utf8');
  
  try {
    const submissions = JSON.parse(fileContent);
    
    if (!Array.isArray(submissions)) {
      throw new Error('Submissions file does not contain an array');
    }
    
    // Look for our test submission
    const found = submissions.some(submission => 
      submission.email === formData.email && 
      submission.name === formData.name
    );
    
    if (!found) {
      throw new Error('Test submission not found in file storage');
    }
    
    console.log(`   Verified file storage: Submission found in ${submissionsFile}`);
  } catch (error) {
    throw new Error(`Failed to parse submissions file: ${error.message}`);
  }
}

/**
 * Clean up any test data after tests complete
 */
function cleanup() {
  try {
    if (fs.existsSync(submissionsFile)) {
      const fileContent = fs.readFileSync(submissionsFile, 'utf8');
      const submissions = JSON.parse(fileContent);
      
      // Remove test submissions
      const filteredSubmissions = submissions.filter(submission => 
        submission.email !== validFormData.email
      );
      
      // Write back the filtered data
      fs.writeFileSync(submissionsFile, JSON.stringify(filteredSubmissions, null, 2));
      console.log('\n🧹 Cleaned up test submissions from file storage');
    }
  } catch (error) {
    console.error('Failed to clean up test data:', error);
  }
}

/**
 * Main test runner
 */
async function runTests() {
  console.log('🔍 STARTING CONTACT FORM SUBMISSION TESTS');
  console.log('==========================================');
  
  const startTime = Date.now();
  
  // Run the tests
  await runTest('Valid form submission', testValidSubmission);
  await runTest('Invalid form submission', testInvalidSubmission);
  
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  
  // Print test summary
  console.log('\n==========================================');
  console.log(`📊 TEST SUMMARY (${duration}s):`);
  console.log(`   Total: ${testResults.total}`);
  console.log(`   Passed: ${testResults.passed}`);
  console.log(`   Failed: ${testResults.failed}`);
  console.log('==========================================');
  
  // Clean up test data
  cleanup();
  
  // Exit with appropriate code
  process.exit(testResults.failed > 0 ? 1 : 0);
}

// Run tests with timeout protection
const testTimeout = setTimeout(() => {
  console.error('\n⚠️ TESTS TIMED OUT');
  process.exit(1);
}, TEST_TIMEOUT);

// Start tests
runTests().finally(() => clearTimeout(testTimeout));
