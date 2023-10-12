import { useContext } from "react";
import {
  Image,
} from "@fluentui/react-components";
import "./Welcome.css";
import { useData } from "@microsoft/teamsfx-react";
import { TeamsFxContext } from "../Context";
import { app } from "@microsoft/teams-js";
import { Find } from "../Find";

export function Welcome(props: { showFunction?: boolean; environment?: string }) {

  const { teamsUserCredential } = useContext(TeamsFxContext);
  const { loading, data, error } = useData(async () => {
    if (teamsUserCredential) {
      const userInfo = await teamsUserCredential.getUserInfo();
      return userInfo;
    }
  });
  const userName = loading || error ? "" : data!.displayName;
  const hubName = useData(async () => {
    await app.initialize();
    const context = await app.getContext();
    return context.app.host.name;
  })?.data;
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <Image src="icono.png" width="500" height="300"/>
        <h1 className="center">{"Bienvenid@! " + (userName ? userName : "")}</h1>
        {hubName && <p className="center">Esta aplicación fue diseñada justo para ti 😀</p>}
        <Find />
      </div>
    </div>
  );
}
