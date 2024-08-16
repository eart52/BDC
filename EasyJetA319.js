function calculateEasyJetA319(totalBags, totalWeight) {
    let hold4Bags = 0, hold5Bags = 0, hold1Bags = 0;
    let hold4Weight = 0, hold5Weight = 0, hold1Weight = 0;

    if (totalBags <= 100) {
        hold4Bags = totalBags;
        hold4Weight = totalWeight;
    } else if (totalBags <= 150) {
        hold4Bags = 100;
        hold4Weight = Math.round((100 * totalWeight) / totalBags);
        hold5Bags = totalBags - 100;
        hold5Weight = totalWeight - hold4Weight;
    } else {
        hold4Bags = 100;
        hold4Weight = Math.round((100 * totalWeight) / totalBags);
        hold5Bags = 50;
        hold5Weight = Math.round((50 * totalWeight) / totalBags);
        hold1Bags = totalBags - 150;
        hold1Weight = totalWeight - (hold4Weight + hold5Weight);
    }

    return {
        hold1: { bags: hold1Bags, weight: hold1Weight },
        hold2: { bags: 0, weight: 0 },
        hold3: { bags: 0, weight: 0 },
        hold4: { bags: hold4Bags, weight: hold4Weight },
        hold5: { bags: hold5Bags, weight: hold5Weight }
    };
}
