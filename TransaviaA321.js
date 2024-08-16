function calculateTransaviaA321(totalBags, totalWeight) {
    let hold3Bags = 0, hold4Bags = 0, hold2Bags = 0;
    let hold3Weight = 0, hold4Weight = 0, hold2Weight = 0;

    if (totalBags <= 80) {
        hold3Bags = totalBags;
        hold3Weight = totalWeight;
    } else if (totalBags <= 140) {
        hold3Bags = 80;
        hold3Weight = Math.round((80 * totalWeight) / totalBags);
        hold4Bags = totalBags - 80;
        hold4Weight = totalWeight - hold3Weight;
    } else {
        hold3Bags = 80;
        hold3Weight = Math.round((80 * totalWeight) / totalBags);
        hold4Bags = 60;
        hold4Weight = Math.round((60 * totalWeight) / totalBags);
        hold2Bags = totalBags - 140;
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
