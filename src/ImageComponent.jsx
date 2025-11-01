import React from 'react';

/**
 * CommonImage - A reusable image component
 * @param {string} src - Image source URL (required)
 * @param {string} alt - Alt text for the image (required)
 * @param {string} className - Additional CSS classes (optional)
 * @param {object} style - Inline styles (optional)
 * @param {number|string} width - Width of the image (optional)
 * @param {number|string} height - Height of the image (optional)
 * @param {boolean} rounded - If true, image will be fully rounded (optional)
 * @param {boolean} shadow - If true, image will have a shadow (optional)
 */
export default function ImageComponent({
  src,
  alt,
  className = '',
  style = {},
  width,
  height,
  rounded = false,
  shadow = false,
  ...props
}) {
  const classes = [
    className,
    rounded ? 'rounded-full' : '',
    shadow ? 'shadow-lg' : '',
  ].join(' ');

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      style={{ width, height, ...style }}
      {...props}
    />
  );
}
