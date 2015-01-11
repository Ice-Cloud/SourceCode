<% 
response.expires=-1
'declare the variables
Dim Connection
Dim ConnectionString
Dim Recordset
Dim SQL
'get the q parameter from URL
q=ucase(request.querystring("q"))

'declare the SQL statement that will query the database
SQL = "DELETE FROM `cloud`.`images2` WHERE `images2`.`image_path` = 'happinessIS3.png'"

'define the connection string, specify database driver
ConnString = "DRIVER={MySQL ODBC 3.51 Driver}; SERVER=localhost; DATABASE=cloud; " &_
"UID=root;PASSWORD=root; OPTION=3"

'create an instance of the ADO connection and recordset objects
Set Connection = Server.CreateObject("ADODB.Connection")
Set Recordset = Server.CreateObject("ADODB.Recordset")

'Open the connection to the database
Connection.Open ConnString

'Open the recordset object executing the SQL statement and return records
Recordset.Open SQL,Connection

'close the connection and recordset objects freeing up resources
Recordset.Close
Set Recordset=nothing
Connection.Close
Set Connection=nothing
%> 