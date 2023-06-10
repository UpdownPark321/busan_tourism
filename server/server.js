const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const axios = require('axios');

const configuration = new Configuration({
    organization: "org-9NXrWYPCvoUucwgOFCmCPB7o",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req,res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 1000,
        temperature: 0,
    });
    console.log(response.data)
    if(response.data) {
        if (response.data.choices) {
            res.json({
                message: response.data.choices[0].text
            })
        }
    }
}) 

const url= 'https://apis.data.go.kr/6260000/AttractionService/getAttractionKr'
const key = 'AyubNIaSXmtsRH6lOKHbuLlh8x6KqA4zoQfyNVcQ1lRTV8IMnkd7MCaUDNGYgEwlAciphXq1EWORmpQkOISXSg=='

const param = {
    ServiceKey: key,
    pageNo: 1,
    numOfRows: 12,
    //resultType: json 이녀석 왜 에러나는지 모르겠어서 url에 그냥 추가했습니다
};

const reqURL = url + '?' + new URLSearchParams(param) + '&resultType=json' ;

console.log(reqURL)

app.get('/busan', async (req, res) => {
    try {
        const fres = await axios.get(reqURL);
        if (fres.status === 200) {
            const jsonData = fres.data;
            res.json(jsonData);
        } else {
            console.log(fres.statusText);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(port, () => {
    console.log(`server running.. port no : ${port}` );
})