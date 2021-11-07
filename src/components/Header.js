import emailjs from "emailjs-com";
export default function Header({ handlePrint }) {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7ng96yi', e.target, 'user_2yLXZrPYNd3rtEYX0xpzm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // e.target.reset;
  };


  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide border-4 border-blue-500 rounded text-blue p-3 text-4xl mb-3">
            Invoicer
          </h1>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-red-500 transition-all duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Download
              </button>
            </li>
            <li>
              <button onClick={sendEmail} className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-green-500 onclick:text-green transition-all duration-300">
                Send
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
