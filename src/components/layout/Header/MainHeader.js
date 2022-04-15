import { DesktopHeader, MobileAppbar, MHidden } from "../../UI";

function MainHeader() {
  return (
    <>
      <MHidden width="mdDown">
        <DesktopHeader />
      </MHidden>
      <MHidden width="mdUp">
        <MobileAppbar />
      </MHidden>
    </>
  );
}

export default MainHeader;
