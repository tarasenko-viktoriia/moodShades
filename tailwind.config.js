module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
   ],
   theme: {
      extend: {
         fontFamily: {
            integral: ['IntegralCF-Bold', 'sans-serif'],
            satoshi: ['Satoshi-Regular', 'sans-serif'],
         },
      },
   },
   plugins: [],
};