// utils/logger.js

function getCaller() {
  const err = new Error();
  const stack = err.stack?.split("\n");
  return stack && stack[3] ? stack[3].trim() : "unknown";
}

function getTime() {
  return new Date().toISOString();
}

export const logger = {
  log: (...args) => {
    console.log(`📝 [LOG] ${getTime()}`, getCaller(), ...args);
  },

  info: (...args) => {
    console.info(`ℹ️ [INFO] ${getTime()}`, getCaller(), ...args);
  },

  warn: (...args) => {
    console.warn(`⚠️ [WARN] ${getTime()}`, getCaller(), ...args);
  },

  error: (...args) => {
    console.error(`❌ [ERROR] ${getTime()}`, getCaller(), ...args);
  }
};