import {Response} from '@angular/http';
import * as _ from "lodash";

export const getDataService = (http)=>
{
    return new Promise((success, failure)=>
	{
		const url1 = 'http://localhost:8080/api/proxy';
		const url2 = 'https://j56ld3za2f.execute-api.us-east-1.amazonaws.com/prod/loadDataForMirrorDashboard';
		http.get(url2)
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
