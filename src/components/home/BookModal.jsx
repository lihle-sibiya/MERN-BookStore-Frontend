import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>Interestign facts about reading</p>
        <p className='my-2'>
          The culture of reading books has a rich and diverse history, and there are many interesting facts and aspects associated with it. Here are some intriguing facts about the culture of reading:


          1. Bibliomania: There is a term called "bibliomania" that describes an obsessive and uncontrollable love for books. This condition has affected numerous famous individuals throughout history.


          2. Bookplates: Bookplates are decorative labels affixed to the inside cover of a book, often indicating ownership. They have been used for centuries as a way to personalize and protect one's books.


          3. Book Cafes: Book cafes have become popular in many countries, offering a blend of literature and coffee. They provide a cozy atmosphere for reading and often host book-related events and discussions.


          4. eBooks and Digital Reading: The advent of eBooks and eReaders, such as the Kindle, has transformed the way people read books. It has made reading more portable and convenient for many.


          5. Book Swaps: Book swapping or sharing is a popular practice where people exchange books they have already read with others, promoting a sense of community and resource sharing.


          6. The Power of Reading: Studies have shown that reading can reduce stress, improve empathy, enhance vocabulary, and increase knowledge. It is also a common therapeutic tool for bibliotherapy.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
