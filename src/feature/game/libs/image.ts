const LIFE_LANDS_ASSET_URL = "https://lifelands.ir/api/v1";

export function getGameImageUrl(imagePath: string): string {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  return `${LIFE_LANDS_ASSET_URL}/${imagePath}`;
}
