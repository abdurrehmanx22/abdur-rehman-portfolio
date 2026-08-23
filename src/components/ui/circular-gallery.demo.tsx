import { CircularGallery } from '@/components/ui/circular-gallery';
import type { GalleryItem } from '@/components/ui/circular-gallery';

const galleryData: GalleryItem[] = [
  {
    common: 'Lion',
    binomial: 'Panthera leo',
    photo: {
      url: 'https://images.unsplash.com/photo-1583499871880-de841d1ace2a?w=900&auto=format&fit=crop&q=80',
      text: 'lion couple kissing on a brown rock',
      pos: '47% 35%',
      by: 'Clément Roy',
    },
  },
  {
    common: 'Asiatic elephant',
    binomial: 'Elephas maximus',
    photo: {
      url: 'https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?w=900&auto=format&fit=crop&q=80',
      text: 'herd of Sri Lankan elephants walking away from a river',
      pos: '75% 65%',
      by: 'Alex Azabache',
    },
  },
  {
    common: 'Red-tailed black cockatoo',
    binomial: 'Calyptorhynchus banksii',
    photo: {
      url: 'https://images.unsplash.com/photo-1619664208054-41eefeab29e9?w=900&auto=format&fit=crop&q=80',
      text: 'close-up of a black cockatoo',
      pos: '53% 43%',
      by: 'David Clode',
    },
  },
  {
    common: 'Dromedary',
    binomial: 'Camelus dromedarius',
    photo: {
      url: 'https://images.unsplash.com/photo-1662841238473-f4b137e123cb?w=900&auto=format&fit=crop&q=80',
      text: 'camel and her new born calf walking in the Sahara desert',
      pos: '65% 65%',
      by: 'Moaz Tobok',
    },
  },
  {
    common: 'Polar bear',
    binomial: 'Ursus maritimus',
    photo: {
      url: 'https://images.unsplash.com/photo-1589648751789-c8ecb7a88bd5?w=900&auto=format&fit=crop&q=80',
      text: 'polar bear on the snow, by the water, raised on the hind legs, front paws together',
      pos: '50% 25%',
      by: 'Hans-Jurgen Mager',
    },
  },
];

export default function CircularGalleryDemo() {
  return (
    <div className="w-full bg-bg text-ink" style={{ height: '500vh' }}>
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
          <h1 className="text-4xl font-bold">Animal Gallery</h1>
          <p className="text-ink-muted">Scroll to rotate the gallery</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery items={galleryData} />
        </div>
      </div>
    </div>
  );
}
