import Testimonial from '../components/Testimonal';

const Review:React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-[100%] bg-gray-50">
      <Testimonial
        name="Paul Rodriguez"
        role="Member Kalofy"
        rating={5.5}
        text="Sed enim lectus, porttitor eu elit nec aliquet auctor nunc. "
        imageUrl="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
};

export default Review;