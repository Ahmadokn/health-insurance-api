function calculateRiskPoints({ age, heightCm, weightKg, bpCategory, diseases = [] }) {
    let points = 0;
  
    // 1. Age
    if (age < 30) {
      points += 0;
    } else if (age < 45) {
      points += 10;
    } else if (age < 60) {
      points += 20;
    } else {
      points += 30;
    }
  
    // 2. BMI
    const heightM = heightCm / 100.0;
    const bmi = weightKg / (heightM * heightM);
  
    if (bmi < 25) {
      points += 0;   // normal
    } else if (bmi < 30) {
      points += 30;  // overweight
    } else {
      points += 75;  // obese
    }
  
    // 3. Blood Pressure (selected category)
    //   normal   => 0
    //   elevated => 15
    //   stage1   => 30
    //   stage2   => 75
    //   crisis   => 100
    switch (bpCategory) {
      case 'normal':
        points += 0;
        break;
      case 'elevated':
        points += 15;
        break;
      case 'stage1':
        points += 30;
        break;
      case 'stage2':
        points += 75;
        break;
      case 'crisis':
        points += 100;
        break;
      default:
        // If it's some unknown category, you might want to throw an error or ignore
        break;
    }
  
    // 4. Family disease
    diseases.forEach(d => {
      if (['diabetes', 'cancer', 'alzheimer'].includes(d)) {
        points += 10;
      }
    });
  
    return points;
  }
  
  function determineRiskCategory(points) {
    if (points <= 20) return 'low';
    if (points <= 50) return 'moderate';
    if (points <= 75) return 'high';
    return 'uninsurable';
  }
  
  module.exports = { calculateRiskPoints, determineRiskCategory };