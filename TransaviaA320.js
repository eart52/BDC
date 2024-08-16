function calculateTransaviaA320(totalBags, totalWeight) {
    // Initialize variables for each hold
    let hold1Bags = 0, hold3Bags = 0;
    let hold1Weight = 0, hold3Weight = 0;

    // Calculate bags and weight for Hold 1
    hold1Bags = Math.floor(totalBags * 0.5);
    hold1Weight = Math.floor((hold1Bags * totalWeight) / totalBags);

    // Calculate remaining bags and weight for Hold 3
    hold3Bags = totalBags - hold1Bags;
    hold3Weight = totalWeight - hold1Weight;

    // Return the results for all holds
    return {
        hold1: { bags: hold1Bags, weight: hold1Weight },
        hold2: { bags: 0, weight: 0 },
        hold3: { bags: hold3Bags, weight: hold3Weight },
        hold4: { bags: 0, weight: 0 },
        hold5: { bags: 0, weight: 0 },
    };
}
