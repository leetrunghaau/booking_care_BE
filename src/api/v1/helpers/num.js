const formatPhoneNumber =(input) =>{
  const digits = input.replace(/\D/g, "");

  if (digits.length === 0) return "";

  const firstGroup = digits.slice(0, 4);
  const rest = digits.slice(4);

  const restGroups = rest.match(/.{1,3}/g) || [];

  return [firstGroup, ...restGroups].join(" ");
}
module.exports = {
    formatPhoneNumber
}