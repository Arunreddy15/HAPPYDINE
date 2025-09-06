export const allowOnlyAlphanumeric = (e) => {
  const regex = /^[a-zA-Z0-9]$/;
  if (!regex.test(e.key)) {
    e.preventDefault();
  }
};