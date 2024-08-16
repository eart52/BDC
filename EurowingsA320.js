function calculateEurowingsA320(totalBags, totalWeight) {
    let hold1Bags = 0, hold3Bags = 0, hold4Bags = 0, hold5Bags = 0;
    let hold1Weight = 0, hold3Weight = 0, hold4Weight = 0, hold5Weight = 0;

    if (totalBags <= 85) {
        hold1Bags = totalBags;
        hold1Weight = totalWeight;
    } else if (totalBags <= 140) {
        hold1Bags = 85;
        hold1Weight = Math.round((85 * totalWeight) / totalBags);
        hold3Bags = totalBags - 85;
        hold3Weight = totalWeight - hold1Weight;
    } else if (totalBags <= 195) {
        hold1Bags = 85;
        hold1Weight = Math.round((85 * totalWeight) / totalBags);
        hold3Bags = 55;
        hold3Weight = Math.round((55 * totalWeight) / totalBags);
        hold4Bags = totalBags - 140;
        hold4Weight = totalWeight - (hold1Weight + hold3Weight);
    } else {
        hold1Bags = 85;
        hold1Weight = Math.round((85 * totalWeight) / totalBags);
        hold3Bags = 55;
        hold3Weight = Math.round((55 * totalWeight) / totalBags);
        hold4Bags = 55;
        hold4Weight = Math.round((55 * totalWeight) / totalBags);
        hold5Bags = totalBags - 195;
        hold5Weight = totalWeight - (hold1Weight + hold3Weight + hold4Weight);
    }

    return {
        hold1: { bags: hold1Bags, weight: hold1Weight },
        hold2: { bags: 0, weight: 0 },
        hold3: { bags: hold3Bags, weight: hold3Weight },
        hold4: { bags: hold4Bags, weight: hold4Weight },
        hold5: { bags: hold5Bags, weight: hold5Weight }
    };
}
