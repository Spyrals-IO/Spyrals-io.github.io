import React from 'react'
import config from '../../utils/config'
import Quote from '../../ui/molecules/Quote'

export default () =>
<section>
  <div className="md:flex justify-between gap-8 ml-24 mr-8 mb-20 hidden">
    <Quote animDelay={"animate-delay-[100ms]"} text={config.quotes.quotes1_text} author={config.quotes.quotes1_author} />
    <Quote animDelay={"animate-delay-[200ms]"} text={config.quotes.quotes2_text} author={config.quotes.quotes2_author} />
    <Quote animDelay={"animate-delay-[300ms]"} text={config.quotes.quotes3_text} author={config.quotes.quotes3_author} />
    <Quote animDelay={"animate-delay-[400ms]"} text={config.quotes.quotes4_text} author={config.quotes.quotes4_author} />
  </div>

  <div className="sm:grid grid-cols-2 gap-4 ml-24 mr-8  hidden md:hidden">
    <div className="grid grid-rows-2 gap-12">
      <Quote animDelay={"animate-delay-[0ms]"} text={config.quotes.quotes1_text} author={config.quotes.quotes1_author} />
      <Quote animDelay={"animate-delay-[300ms]"} text={config.quotes.quotes2_text} author={config.quotes.quotes2_author} />
    </div>
    <div className="grid grid-rows-2 gap-16">
      <Quote animDelay={"animate-delay-[0ms]"} text={config.quotes.quotes3_text} author={config.quotes.quotes3_author} />
      <Quote animDelay={"animate-delay-[300ms]"} text={config.quotes.quotes4_text} author={config.quotes.quotes4_author} />
    </div>
  </div> 

  <div className="grid grid-rows-4 gap-24 ml-20 mr-8 mb-20 sm:hidden">
    <Quote animDelay={"animate-delay-[100ms]"} text={config.quotes.quotes1_text} author={config.quotes.quotes1_author} />
    <Quote animDelay={"animate-delay-[200ms]"} text={config.quotes.quotes2_text} author={config.quotes.quotes2_author} />
    <Quote animDelay={"animate-delay-[300ms]"} text={config.quotes.quotes3_text} author={config.quotes.quotes3_author} />
    <Quote animDelay={"animate-delay-[400ms]"} text={config.quotes.quotes4_text} author={config.quotes.quotes4_author} />
  </div>

</section>
