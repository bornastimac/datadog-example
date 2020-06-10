prerequisites
nodejs
datadog account
datadog agent (install with msi installer (wizard, need ~950 MB of space for local agent, entering API KEY and region as per instructions))

after completed agent installation, add nodejs integration in datadog app
go to metrics and select variable that you want to track (in our caes page.views)
you can see a bar chart of your variable

for more complex tracing, check https://docs.datadoghq.com/tracing/setup/nodejs/