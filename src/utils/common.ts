export const imageUrl = (name: string) => {
  return import.meta.env.VITE_PUBLIC_BASS_IMAGE_URL + '/' + name
}
