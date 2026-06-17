export const getUserStatus = (status) => {
  switch (status) {
    case "Quotation Sent":
      return "Quotation Received";

    case "Quotation Accepted":
      return "Accepted By You";

    case "Quotation Rejected":
      return "Rejected By You";

    default:
      return status;
  }
};

export const getAdminStatus = (status) => {
  switch (status) {
    case "Reply Submitted":
      return "Replied By User";

    case "Quotation Accepted":
      return "Accepted By Customer";

    case "Quotation Rejected":
      return "Rejected By Customer";

    default:
      return status;
  }
};
