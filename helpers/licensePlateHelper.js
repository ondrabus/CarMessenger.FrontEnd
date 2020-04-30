export function sanitizeLicensePlate(plate){
        return plate.replace(/\s/g, "").replace(/\-/g, "").toLowerCase();
}
