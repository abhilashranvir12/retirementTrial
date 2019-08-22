// rate of inflation =
// ((1+rate ondragenter()))

function calculate() {
  let age;
  let retirement;
  let life;
  let expense;
  let rateAccumulation;
  let ratePostRetirement;
  let inflation;
  let inflationAdjusted;

  let yearRemaining;
  let lifeRemaining;
  let monthlyExpense;
  let pmt;
  let retirementCorpus;

  yearRemaining = retirement - age;
  console.log("You have year remaining for reitrement", yearRemaining);

  lifeRemaining = life - retirement;

  inflationAdjusted = ((1 + ratePostRetirement) / (1 + inflation) - 1) * 100;

  monthlyExpense = (monthlyExpense * (1 + inflation)) ^ yearRemaining;

  console.log("Monthly expense required", monthlyExpense);

  console.log("Retirement Corpus required is ", retirementCorpus);

  //pmt formula
  function PMT(ir, np, pv, fv, type) {
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0) return -(pv + fv) / np;

    pvif = Math.pow(1 + ir, np);
    pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

    if (type === 1) pmt /= 1 + ir;

    return pmt;
  }

  retirementCorpus = pmt * (((1 - (1 + i)) ^ -n) / i);
}
