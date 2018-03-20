INSERT INTO property_data (
    name,
    description,
    city,
    address,
    zipcode,
    state,
    img_url,
    loan_amount,
    monthly_mortgage,
    desired_rent,
)
VALUES (
    ${propertyName},
    ${propertyDescription},
    ${city},
    ${address},
    ${zip},
    ${state},
    ${imgUrl},
    ${loanAmount},
    ${monthlyMortgage},
    ${desiredRent},
);