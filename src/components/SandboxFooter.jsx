export const SandboxFooter = () => (
  <footer className="sandbox-footer py-5 px-5">
    <div className="d-flex pb-3 flex-column flex-md-row">
      <div className="text-center">
        <img alt="OpenCraft Logo" className="sandbox-logo pt-1" src="https://opencraft.com/wp-content/uploads/opencraft-logo.png" />
      </div>
      <div className="pr-5 d-none d-md-block" />
      <div className="pt-3 d-block d-md-none" />
      <div className="align-self-top text-center text-md-left">
        Hosted by <a href="https://opencraft.com/">OpenCraft.</a><br />
        A verified Open edX&reg; partner.
      </div>
      <div className="flex-grow-1 text-right d-none d-md-block">
        <img className="openedx-logo" alt="Powered by Open edX" src="https://openedx.org/wp-content/uploads/2025/07/Powered-by-Open-edX-WHITE.png" />
      </div>
    </div>
    <hr />
    <div className="text-center d-block d-md-none my-4">
      <img className="openedx-logo" alt="Powered by Open edX" src="https://openedx.org/wp-content/uploads/2025/07/Powered-by-Open-edX-WHITE.png" />
    </div>
    <div className="text-center text-md-left"><small>&copy; OpenCraft 2025  |  edX and Open edX&reg; are trademarks of edX Inc</small></div>
  </footer>
);
