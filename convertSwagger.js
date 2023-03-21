const fs = require('fs');
const SwaggerParser = require('swagger-parser');

// Load the Swagger JSON file
const swaggerJson = JSON.parse(fs.readFileSync('swagger.json', 'utf8'));

// Convert the JSON to YAML
SwaggerParser.validate(swaggerJson, (err, api) => {
  if (err) {
    console.error(err);
  } else {
    const swaggerYaml = YAML.stringify(api);
    // Write the YAML to a file
    fs.writeFileSync('swagger.yaml', swaggerYaml);
  }
});
