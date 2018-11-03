# crypto-app

<h1><ul>How to Use</ul></h1> 

Step 1 - The app has a json text editor which can validate the json as you type. There is an example that is prepopulated in the editor for the user to modify.

Step 2- click on submit button and user will see the output in the required format.

<h1><ul>How it works </ul></h1> 

- React app is hosted on S3. 

- The app is getting the input json from user and submitting the json as request body to API gateway.

- The API gateway is calling the lambda function which has ability to process the data and return the results in the required format using nodejs.

- Reponse from the API is then passed to a react component called 'TableComponent' which display the information in the format mentioned in the requirements.



<h1><ul>Testing right away!</ul></h1> 

1. Fork and/or clone this Github repository

2. Go to project under react-frontend/my-app:

    $ cd path/to/repo/react-frontend/my-app
    
Install example project dependencies:
    $ npm install
    
Serve sample website to port 3000:
   $ npm start
Open http://localhost:3000 in the web browser

3.  AWS Configuration

     a. Create a table in Dynamo DB with Name Crypto and InputId as Primary partition key.
  
     b. Create a new IAM role with AWSLambdaBasicExecutionRole and DynamoDB read/write role for table you created in previous     step a.
  
     c. Install the lambda function available in nodejs-api-backend folder in your AWS env.
     
     d. Create the API savecryptodata which will have a PUT method and call the lambda function created in step c

     e. Alternately, you can use the yaml file available under nodejs-api-backend to configure using CloudFormation template.

Note - Replace the arn in the yaml files before using.
     
     
<h1><ul>Upcoming Features</ul></h1> 

- a form that allows filtering based on date and/or currency.

- provide the API that retrieves filtered data based on the parameters
passed while calling the API.

- validating json schema

- more options to enter the input


<h1><ul>Assumptions</ul></h1> 

- The App will accept only the schema given in sample request. If the schema is altered, the app will give error message to the user.

- The App can receive the data for n number of currency with n number of quotes for a given date. 

- The buy price and buy time is always the first price in the quotes for a curreny.





