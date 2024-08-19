const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
              <a href="#" className="hover:text-gray-400">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;