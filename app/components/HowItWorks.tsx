import Image from 'next/image';

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-8 rounded-lg ">
    {/* Left Image Section */}
    <div className="md:w-1/2 w-full p-6">
      <Image
        src="https://images.pexels.com/photos/7937347/pexels-photo-7937347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Food Image"
        className="rounded-lg object-cover"
        width={500}
        height={300}
        style={{ height: '50%', width: '100%' }}  
      />
    </div>

    {/* Right How It Works Section */}
    <div className="md:w-1/2 w-full p-6">
      <h2 className="text-3xl font-bold mb-4">How it works</h2>
      <div className="space-y-10">
        {/* Step 1 */}
        <div className="flex items-start relative">
          <div className="flex-shrink-0 bg-purple-100 rounded-full p-2 mr-4">
            <span className="text-purple-500 text-xl font-semibold">1</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Customize Your Order</h3>
            <p className="text-gray-600">
              Personalize your meal by selecting portion sizes, add-ons, or any special instructions to suit your taste preferences.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start relative">
          <div className="flex-shrink-0 bg-purple-100 rounded-full p-2 mr-4">
            <span className="text-purple-500 text-xl font-semibold">2</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Standard Macros vs Advanced Macros</h3>
            <p className="text-gray-600">
              Select the meal plan that is best suited for your lifestyle and helps you reach your goals.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-purple-100 rounded-full p-2 mr-4">
            <span className="text-purple-500 text-xl font-semibold">3</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Meals are Cooked Fresh</h3>
            <p className="text-gray-600">
              Our expert chefs prepare your meals with care, using only fresh ingredients to ensure quality and taste in every bite.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HowItWorks;
