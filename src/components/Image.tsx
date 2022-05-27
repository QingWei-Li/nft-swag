import NextImage, { ImageProps } from 'next/image';

const imageKitLoader = ({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  // whitelist

  if (
    ['https://lh3.googleusercontent.com', 'https://img.seadn.io/'].filter(
      (prefix) => src.startsWith(prefix)
    ).length
  ) {
    return src;
  }

  if (src[0] === '/') {
    src = src.slice(1);
  }
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(',');
  let urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT as string;

  if (urlEndpoint[urlEndpoint.length - 1] === '/') {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }

  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

export const Image: React.FC<ImageProps> = (props) => {
  return (
    <NextImage
      loader={imageKitLoader}
      width={400}
      height={400}
      onError={(e) => (e.currentTarget.src = props.src as string)}
      {...props}
    />
  );
};
