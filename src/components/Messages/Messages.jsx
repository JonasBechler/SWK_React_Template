import AccountwithoutFusionAuthID from "./AccountwithoutFusionAuthID";
import FusionAuthIDwithoutAccount from "./FusionAuthIDwithoutAccount";
import ConnectAccounts from "./ConnectAccounts"
import NoServerConnection from "./NoServerConnection";

module.exports = function ( config, setPage, setContent ) {
    return {
        AccountwithoutFusionAuthID: AccountwithoutFusionAuthID(config, setPage, setContent),
        FusionAuthIDwithoutAccount: FusionAuthIDwithoutAccount(config, setPage, setContent),
        ConnectAccounts: ConnectAccounts(config, setPage, setContent),
        NoServerConnection: NoServerConnection
    }
}