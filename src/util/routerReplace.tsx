import Router from "next/router";

/**
 *
 * @param aspath
 *
 *
 */
const rotuerReplace = (aspath: any) => {
  // Router.reload();
  // this does an actual reload , does work but replaces fills the need

  Router.replace(aspath);
};

export default rotuerReplace;
