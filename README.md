Prerequisites:
windows
nodejs
datadog account
datadog agent (install with msi installer wizard, need ~950 MB of space for local agent. Enter API KEY and region as per installation instructions)

after completed agent installation, add nodejs integration in datadog app
go to metrics and select variable that you want to track (in our case page.views)
you can see a bar chart of your variable in real time

for more complex tracing, check https://docs.datadoghq.com/tracing/setup/nodejs/
