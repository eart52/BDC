function calculateEasyJetA321(totalBags, totalWeight) {
    let hold3Bags = 0, hold4Bags = 0, hold2Bags = 0;
    let hold3Weight = 0, hold4Weight = 0, hold2Weight = 0;

    if (totalBags <= 100) {
        hold3Bags = totalBags;
        hold3Weight = totalWeight;
    } else if (totalBags <= 150) {
        hold3Bags = 100;
        hold3Weight = Math.round((100 * totalWeight) / totalBags);
        hold4Bags = totalBags - 100;
        hold4Weight = totalWeight - hold3Weight;
    } else {
        hold3Bags = 100;
        hold3Weight = Math.round((100 * totalWeight) / totalBags);
        hold4Bags = 50;
        hold4Weight = Math.round((50 * totalWeight) / totalBags);
        hold2Bags = totalBags - 150;
        hold2Weight = totalWeight - (hold3Weight + hold4Weight);
    }

    return {
        hold1: { bags: 0, weight: 0 },
        hold2: { bags: hold2Bags, weight: hold2Weight },
        hold3: { bags: hold3Bags, weight: hold3Weight },
        hold4: { bags: hold4Bags, weight: hold4Weight },
        hold5: { bags: 0, weight: 0 }
    };
}
