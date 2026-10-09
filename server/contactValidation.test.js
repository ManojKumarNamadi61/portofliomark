import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactPayload } from './contactValidation.js';

test('accepts a valid contact payload', () => {
  const result = validateContactPayload({
    fullName: 'Alice Example',
    email: 'alice@example.com',
    phone: '+1 555 0100',
    service: 'ui-ux',
    message: 'I need a new landing page for my product.'
  });

  assert.equal(result.valid, true);
  assert.equal(result.normalized.fullName, 'Alice Example');
  assert.equal(result.normalized.email, 'alice@example.com');
  assert.equal(result.normalized.service, 'ui-ux');
});

test('rejects missing required fields', () => {
  const result = validateContactPayload({
    email: 'alice@example.com',
    phone: '+1 555 0100',
    service: 'ui-ux',
    message: 'Need a design.'
  });

  assert.equal(result.valid, false);
  assert.match(result.message, /full name/i);
});

test('rejects invalid email addresses', () => {
  const result = validateContactPayload({
    fullName: 'Alice Example',
    email: 'not-an-email',
    phone: '+1 555 0100',
    service: 'ui-ux',
    message: 'A quick message.'
  });

  assert.equal(result.valid, false);
  assert.match(result.message, /email/i);
});

test('rejects overlong values', () => {
  const longText = 'x'.repeat(101);
  const result = validateContactPayload({
    fullName: longText,
    email: 'alice@example.com',
    phone: '+1 555 0100',
    service: 'ui-ux',
    message: 'Needs a project brief.'
  });

  assert.equal(result.valid, false);
  assert.match(result.message, /full name/i);
});
