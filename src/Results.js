import React, { Component }from "react";
import "./Results.css"
import { Toolbar, ToolbarGroup, ToolbarTitle, DropDownMenu, MenuItem, ToolbarSeparator, RaisedButton } from "material-ui";
import { Link } from "react-router-dom";
import SortIcon from "material-ui-icons/Sort";
import PeopleIcon from "material-ui-icons/People";

class Results extends Component {
    
    render() {
        const styles={
            button: {
                marginLeft: "1vw"
            }
        };

        return(
            <div className="resultspage_container">
                <div className="results_container">
                    <div className="recent_container">
                        <Toolbar>
                            <ToolbarGroup>
                                <ToolbarTitle text="Derniers résultats" />
                                <DropDownMenu value={this.props.displayItemRecent} onChange={this.props.handleDisplayRecent}>
                                    <MenuItem value={1} primaryText="Aujourd'hui" />
                                    <MenuItem value={2} primaryText="Cette semaine" />
                                    <MenuItem value={3} primaryText="Ce mois" />
                                </DropDownMenu>
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <SortIcon className="muidocs-icon-sort" />
                                <ToolbarSeparator />
                                <Link to="/Match">                                
                                    <RaisedButton
                                        style={styles.button}
                                        label="Nouveau Match"
                                        backgroundColor="#fcd21c"
                                        icon={<PeopleIcon className="muidocs-icon-people" />}
                                    />
                                </Link>
                            </ToolbarGroup>
                        </Toolbar>
                    </div>
                    <div className="striking_container">
                        <Toolbar>
                            <ToolbarGroup>
                                <ToolbarTitle text="Résultats marquants" />
                                <DropDownMenu value={this.props.displayItemStriking} onChange={this.props.handleDisplayStriking}>
                                    <MenuItem value={1} primaryText="Haute-volée" />
                                    <MenuItem value={2} primaryText="Humiliation" />
                                    <MenuItem value={3} primaryText="Bus" />
                                </DropDownMenu>
                            </ToolbarGroup>                                
                            <ToolbarGroup lastChild={true}>                            
                                <ToolbarSeparator />
                                <SortIcon className="muidocs-icon-sort" style={{ margin: "1vw" }} />
                            </ToolbarGroup>
                        </Toolbar>
                    </div>
                    <div className="search_container">
                    <Toolbar>
                        <ToolbarGroup>
                            <ToolbarTitle text="Trouver un match" />
                        </ToolbarGroup>
                    </Toolbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;
