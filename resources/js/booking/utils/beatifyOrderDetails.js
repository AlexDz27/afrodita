export function getBeautifiedOrderDetails(details) {
  const beautifiedDetails = {...details};

  for (const [detail, value] of Object.entries(beautifiedDetails)) {
    if (beautifiedDetails[detail] === null) continue;

    beautifiedDetails[detail] = getBeautifiedOrderDetailValue(value);
  }

  return beautifiedDetails;
}

function getBeautifiedOrderDetailValue(detail) {
  let beautified = detail;

  // Uppercase first letter
  beautified = beautified.charAt(0).toUpperCase() + beautified.slice(1);
  // Replace underscore '_' with space ' '
  beautified = beautified.replace(/_/g, ' ');

  return beautified;
}