function calculateJet2B738(totalBags, totalWeight) {
    // Initialize variables for each hold
    let hold2Bags = 0, hold3Bags = 0;
    let hold2Weight = 0, hold3Weight = 0;

    // Calculate bags and weight for Hold 1
    hold2Bags = Math.floor(totalBags * 0.5);
    hold2Weight = Math.floor((hold2Bags * totalWeight) / totalBags);

    // Calculate remaining bags and weight for Hold 3
    hold3Bags = totalBags - hold2Bags;
    hold3Weight = totalWeight - hold2Weight;

    // Return the results for all holds
    return {
        hold1: { bags: 0, weight: 0 },
        hold2: { bags: hold2Bags, weight: hold2Weight },
        hold3: { bags: hold3Bags, weight: hold3Weight },
        hold4: { bags: 0, weight: 0 },
        hold5: { bags: 0, weight: 0 },
    };
}
