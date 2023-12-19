const SellerProductCard = () => {
  return (
    <div className="w-full h-full flex justify-between p-2 rounded-lg backdrop-blur-xl border-[1px] border-violet-primary hover:scale-105 hover:bg-violet-100 hover:shadow-lg hover:shadow-violet-primary transition-all shadow-xl">
      <div className="w-1/2 flex gap-4">
        <img src="/potato.jpg" alt="" className="h-full aspect-square rounded-lg" />
        <div className="w-full h-full flex flex-col justify-center">
          <h5 className="text-sm font-medium text-slate-900">
            Shop Name <span className=" font-normal">- Jakarta Pusat</span>
          </h5>
          <p className="text-sm text-gray-500 mb-2">stock: 12 kg</p>
          <p className="text-red-primary font-medium">Rp 12.000 / kg</p>
        </div>
      </div>
      <div className="w-1/4 h-full flex items-center justify-end px-4">
        <button className="py-2 px-8 bg-violet-primary rounded-lg text-slate-50 hover:bg-violet-500 hover:border hover:border-violet-primary">Beli</button>
      </div>
    </div>
  );
};

export default SellerProductCard;
