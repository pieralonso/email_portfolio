{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example:
  // "Print to console": {
  //   "scope": "javascript,typescript",
  //   "prefix": "log",
  //   "body": ["console.log('$1');", "$2"],
  //   "description": "Log output to console"
  // },

	"email boilerplate": {
		"prefix": "email",
		"body": [
		  "<!DOCTYPE html>",
		  "<html lang=\"en\" dir=\"ltr\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">",
		  "    <head>",
		  "        <meta http-equiv=\"Content Type\" content=\"text/html; charset=utf-8\">",
		  "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=yes\">  ",
		  "        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
		  "        <meta name=\"format-detection\" content=\"telephone=no, date=no, address=no, email=no, url=no\">",
		  "        <meta name=\"x-apple-disable-message-reformatting\">",
		  "        <!-- <meta name=\"color-scheme\" content=\"light dark\">",
		  "        <meta name=\"supported-color-schemes\" content=\"light dark\">         -->",
		  "        <title>${1:title}</title>",
		  "        <!--[if mso]>",
		  "        <noscript>",
		  "          <xml>",
		  "            <o:OfficeDocumentSettings>",
		  "              <o:PixelsPerInch>96</o:PixelsPerInch>",
		  "            </o:OfficeDocumentSettings>",
		  "          </xml>",
		  "        </noscript>",
		  "        <![endif]-->        ",
		  "",
		  "",
		  "        <style>",
		  "",
		  "            /* :root {",
		  "                  color-scheme: light dark;",
		  "                  supported-color-schemes: light dark;",
		  "                } */",
		  "",
		  "",
		  "",
		  "            body, table, td, a {-webkit-text-size-adjust: 100%; -ms-text-overflow: 100%;}",
		  "            table,  td {mso-table-lspace:0pt; mso-table-rspace:0pt}",
		  "            img { -ms-interpolation-mode: bicubic;}",
		  "",
		  "            img { border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;}",
		  "            table {border-collapse: collapse !important;}",
		  "            body {height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}",
		  "",
		  "        a[x-apple-data-detectors] {",
		  "            text-decoration: none;",
		  "            font-size: inherit !important;",
		  "            font-family: inherit !important;",
		  "            font-weight: inherit !important;",
		  "            line-height: inherit !important;",
		  "            color: inherit !important;",
		  "        }",
		  "",
		  "",
		  "        u + #body a {",
		  "		    color: inherit;",
		  "		    text-decoration: none;",
		  "		    font-size: inherit;",
		  "		    font-family: inherit;",
		  "		    font-weight: inherit;",
		  "		    line-height: inherit;",
		  "		}            ",
		  "",
		  "",
		  "        #MessageViewBody a {",
		  "		    color: inherit;",
		  "		    text-decoration: none;",
		  "		    font-size: inherit;",
		  "		    font-family: inherit;",
		  "		    font-weight: inherit;",
		  "		    line-height: inherit;",
		  "        }",
		  "",
		  "        a.button:hover { background-color: blueviolet !important;}",
		  "",
		  " ",
		  "",
		  "",
		  "        </style>",
		  "    </head>",
		  "    <body id=\"body\" style=\"margin: 0 !important;padding:0 !important;\">",
		  "",
		  "            <div style=\"display: none;\">",
		  "",
		  "            </div>",
		  "",
		  "             ${2:content}    ",
		  "        ",
		  "    </body>",
		  "    ",
		  "</html>"
		],
		"description": "email boilerplate"
	  },

		"fluid table": {
			"prefix": "fluidtable",
			"body": [
				"<table  cellspacing=\"0\" cellpadding=\"0\" width=\"${1:100%}\" border=\"0\">",
				"  <tr>",
				"    <td align=\"center\" valing=\"top\" ${2:}>",
				"      ${3:content}",
				"    </td>",
				"  </tr>",
				"</table>"
			],
			"description": "fluid table"
		},

		"column": {
			"prefix": "column",
			"body": [
				"<div style=\"display:inline-block;min-width:${1:300}px;width:100%;max-width:${2:50}%;\">",
					"	${3:content}",
				"</div>"
			],
			"description": "column"
		},

		"ghost column": {
			"prefix": "if",
			"body": [
				"<!--[if (gte mso 9)|(IE)]>",
				"<table  cellspacing=\"0\" cellpadding=\"0\" width=\"660\"   border=\"0\">",
				"<tr>",
				"<td align=\"left\" valing=\"top\" width=\"${1:330}\" >",
				"<![endif]-->"
			],
			"description": "column"
		},

		"ghost table end": {
			"prefix": "endif",
			"body": [
			  "<!--[if (gte mso 9)|(IE)]>",
			  "</td>",
			  "</tr>",
			  "</table>",
			  "<![endif]-->"
			],
			"description": "ghost table end"
		  },

		  "middle ghost column": {
			"prefix": "middleif",
			"body": [
			  "<!--[if (gte mso 9)|(IE)]>",
			  "</td>",
			  "<td align=\"left\" valing=\"top\" width=\"${1:330}\">",
			  "<![endif]-->"
			],
			"description": "middle ghost column"
		  }



}
