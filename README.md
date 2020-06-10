Prerequisites:  
windows  
nodejs  
datadog account (https://www.datadoghq.com/, get free account and follow the instructions)
datadog agent (install with msi installer wizard, need ~950 MB of space for local agent. Enter a provided API KEY and region as per installation instructions)  

After completed agent installation, add nodejs integration in datadog app  
Run ```node datadog-example.js``` on your development machine.
Go to metrics and select variable that you want to track (in our case page.views)  
Now you should see a bar chart of your variable in real time

for more complex tracing, check https://docs.datadoghq.com/tracing/setup/nodejs/
