function verifyInvalidCPF(cpf) {
  const invalidCPFs = Array.from({ length: 10 }, (_, index) =>
    String(index).repeat(11)
  );

  // Verifiy if the invalid CPF is at any position of your invalidCPFs's array
  return invalidCPFs.indexOf(cpf) === -1;
}

function sumNumbersCPF(cpf, totalDigits, weight) {
  let sum = 0;

  for (let index = 0; index <= totalDigits; index++) {
    sum += cpf.substring(index - 1, index) * (weight - index);
  }

  return sum;
}

function verifyDigit(cpf, totalDigits, weight, verifierDigit) {
  const sum = sumNumbersCPF(cpf, totalDigits, weight);
  const remainder = (sum * 10) % 11;
  return remainder === verifierDigit;
}

function verifyFirstDigit(cpf) {
  const [weight, totalDigitsFirstPart] = [11, 9];
  const verifierDigit = parseInt(cpf.substring(9, 10));

  return verifyDigit(cpf, totalDigitsFirstPart, weight, verifierDigit);
}

function verifySecondDigit(cpf) {
  const [weight, totalDigitsSecondPart] = [12, 10];
  const verifierDigit = parseInt(cpf.substring(10, 11));

  return verifyDigit(cpf, totalDigitsSecondPart, weight, verifierDigit);
}

function validateCPF(cpf) {
  return (
    verifyFirstDigit(cpf) && verifySecondDigit(cpf) && verifyInvalidCPF(cpf)
  );
}
