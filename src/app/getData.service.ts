import {Response} from '@angular/http';
import * as _ from "lodash";

export const getDataService = (http)=>
{
    return new Promise((success, failure)=>
	{
		http.get('http://localhost:8080/api/proxy')
		.toPromise()
		.then((response:Response)=>
		{
			console.log("getDataService::then, body:", response.json());
			const body = response.json();
			success(body.data);
		})
		.catch((err:any)=>
		{
			console.log("getDataService::catch, error:", err);
			failure(err);
		});
	});
};
