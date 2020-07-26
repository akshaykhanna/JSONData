'use strict';

// const { extract } = require('article-parser');
// const htmlToText = require('html-to-text');
// let SummarizerManager = require('node-summarizer').SummarizerManager;
// const url = 'https://goo.gl/MV8Tkh';

// extract(url)
//   .then((article) => {
//     //   console.log(article);
//     const content = article.content;
//     //   console.log(content);
//     const text = htmlToText.fromString(content);
//     // console.log(text);
//     const number_of_sentences = 5;
//     const Summarizer = new SummarizerManager(
//       text_to_summarize,
//       number_of_sentences
//     );
//     let summary = Summarizer.getSummaryByFrequency().summary;
//     console.log('summary: ', summary);
//     console.log('summary.length: ', summary.length);
//     Summarizer.getSummaryByRank().then((summary_object) => {
//       const summary = summary_object.summary;
//       console.log('summary2: ', summary);
//       console.log('summary2.length: ', summary.length);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });


  const text_to_summarize = `
 Pharmaceutical firm Cipla is all set to launch Favipiravir, developed by the Council of Scientific and Industrial Research (CSIR) in a cost-effective process, for the treatment of COVID-19 patients, according to an official statement on Thursday.

About Cipla
Well-known pharmaceutical firm Cipla needs no introduction. Its Chairman is 83-year-old, Billionaire Yusuf Khwaja Hamied who was born in Poland but became popular as an Indian scientist. The company was founded by his father Khwaja Abdul Hamied.

Chairman Yusuf Khwaja Hamied
Yusuf Khwaja Hamied is a billionaire industrialist. He is the fellow of National Science Academy. He was born in 1936 in Poland. He is an Indian citizen now. He studied from Cathedral & John Connon School and University of Cambridge. Cipla has its office in Bombay Central in Mumbai.
Anti-viral drug Favipiravir
An off-patent anti-viral drug, Favipiravir, originally discovered by Fuji Pharma in Japan, has shown promise in clinical trials for treatment of COVID-19 patients, especially in mild and moderate cases.
CSIR-Indian Institute of Chemical Technology (CSIR-IICT) developed a cost effective process using locally available chemicals to synthesise this Active Pharmaceutical Ingredient (API) and transferred the technology to Cipla.
“Cipla has scaled up the process in their manufacturing facility and approached DCGI (Drug Controller General of India) for permission to launch the product in India. Given that DCGI has given restricted emergency use for Favipiravir in the country, Cipla is now all set to launch the product to help patients suffering from COVID-19,” the statement said.
Commenting on the development, Director of CSIR-IICR S Chandrashekhar said the technology is very efficient and makes it affordable and allows Cipla to make large quantities of the product within a short span of time.

CSIR Director General Shekhar C Mande observed that they are working with the industry in developing quick solutions and products for mitigation of COVID-19 and this partnership with Cipla is an example of how CSIR is committed to bringing repurposed drugs soon.
Rs 68 per tablet
Cipla said it will commercially launch Ciplenza in the first week of August priced at Rs 68 per tablet.
`;
const number_of_sentences = 5;

let SummarizerManager = require("node-summarizer").SummarizerManager;

let Summarizer = new SummarizerManager(text_to_summarize,number_of_sentences);

let summary = Summarizer.getSummaryByFrequency().summary;
console.log('summary: ', summary);
console.log('summary.length: ', summary.length);

Summarizer.getSummaryByRank().then((summary_object)=>{
    const summary = summary_object.summary
    console.log('summary2: ', summary);
    console.log('summary2.length: ', summary.length);
})
