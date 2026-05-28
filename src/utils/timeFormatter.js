/**
 * utils/timeFormatter.js
 * All time-related formatting utilities for the revolving clock.
 */

/**
 * Returns { hours, minutes, seconds, ampm } from a Date object.
 * @param {Date} date
 * @param {"12"|"24"} format
 */
export function formatTime(date, format = "12") {
  const raw = date instanceof Date ? date : new Date();

  let hours = raw.getHours();
  const minutes = raw.getMinutes();
  const seconds = raw.getSeconds();

  let ampm = null;

  if (format === "12") {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  return {
    hours:   pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    ampm,
  };
}

/**
 * Pads a number to two digits.
 * @param {number} n
 * @returns {string}
 */
export function pad(n) {
  return n.toString().padStart(2, "0");
}

/**
 * Returns a formatted date string: "Monday / January 1 / 2026"
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  const d = date instanceof Date ? date : new Date();
  const days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June",
                  "July","August","September","October","November","December"];
  return {
    dayName:   days[d.getDay()],
    monthName: months[d.getMonth()],
    dayNum:    d.getDate(),
    year:      d.getFullYear(),
  };
}

/**
 * Returns the user's detected IANA timezone string.
 * @returns {string}
 */
export function getTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
