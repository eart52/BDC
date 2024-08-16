function calculateSmartWingsB738(totalBags, totalWeight) {
    const hold2Bags = Math.floor(totalBags * 0.3);
    const hold2Weight = (hold2Bags / totalBags) * totalWeight;

    const hold3Bags = totalBags - hold2Bags;
    const hold3Weight = (hold3Bags / totalBags) * totalWeight;

    return {
        hold1: { bags: 0, weight: 0 },
        hold2: { bags: hold2Bags, weight: Math.round(hold2Weight) },
        hold3: { bags: hold3Bags, weight: Math.round(hold3Weight) },
        hold4: { bags: 0, weight: 0 },
        hold5: { bags: 0, weight: 0 },
    };
}
