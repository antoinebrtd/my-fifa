import React, { Component }from "react";
import "./Results.css"
import { Toolbar, ToolbarGroup, ToolbarTitle, DropDownMenu, MenuItem, ToolbarSeparator, RaisedButton, Chip, SelectField, TextField, DatePicker } from "material-ui";
import { Link } from "react-router-dom";
import SortIcon from "material-ui-icons/Sort";
import PeopleIcon from "material-ui-icons/People";
import SearchIcon from "material-ui-icons/Search";

class Results extends Component {
    
    render() {
        const styles={
            button: {
                marginLeft: "1vw"
            },
            chip: {
                width: "8vw",
                marginTop: "3vh",
                marginBottom: "1vh",
                textAlign: "center"
            },
            selectField: {
                width: "8vw"
            }
        };

        return(
            <div className="resultspage_container">
                <div className="results_container">
                    <div className="recent_container">
                        <Toolbar>
                            <ToolbarGroup>
                                <ToolbarTitle text="Derniers résultats" />
                                <DropDownMenu value={this.props.displayItemRecent} onChange={() => this.props.handleDisplayRecent()}>
                                    <MenuItem value={0} primaryText="Aujourd'hui" />
                                    <MenuItem value={1} primaryText="Cette semaine" />
                                    <MenuItem value={2} primaryText="Ce mois" />
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
                                <DropDownMenu value={this.props.displayItemStriking} onChange={() => this.props.handleDisplayStriking()}>
                                    <MenuItem value={0} primaryText="Haute-volée" />
                                    <MenuItem value={1} primaryText="Humiliation" />
                                    <MenuItem value={2} primaryText="Bus" />
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
                        <div className="select_field">
                            <SelectField
                                floatingLabelText="Joueur 1"
                                floatingLabelStyle={{color: 'white'}}
                                style={styles.selectField}
                            >
                                <MenuItem value={1} primaryText="Beber" />
                                <MenuItem value={2} primaryText="Borcky" />
                                <MenuItem value={3} primaryText="Arthur" />
                            </SelectField>
                            <Chip style={styles.chip}>Joueurs</Chip>
                            <SelectField
                                floatingLabelText="Joueur 2"
                                floatingLabelStyle={{color: 'white'}}
                                style={styles.selectField}
                            >
                                <MenuItem value={1} primaryText="Beber" />
                                <MenuItem value={2} primaryText="Borcky" />
                                <MenuItem value={3} primaryText="Arthur" />
                            </SelectField>
                        </div>
                        <div className="select_field">
                            <SelectField
                                floatingLabelText="Equipe 1"
                                floatingLabelStyle={{color: 'white'}}
                                style={styles.selectField}
                            >
                                <MenuItem value={1} primaryText="RM" />
                                <MenuItem value={2} primaryText="FCB" />
                                <MenuItem value={3} primaryText="Man City" />
                                <MenuItem value={4} primaryText="Juventus" />
                                <MenuItem value={5} primaryText="Liverpool" />
                                <MenuItem value={6} primaryText="Arsenal" />
                            </SelectField>
                            <Chip style={styles.chip}>Equipes</Chip>
                            <SelectField
                                floatingLabelText="Equipe 2"
                                floatingLabelStyle={{color: 'white'}}
                                style={styles.selectField}
                            >
                                <MenuItem value={1} primaryText="RM" />
                                <MenuItem value={2} primaryText="FCB" />
                                <MenuItem value={3} primaryText="Man City" />
                                <MenuItem value={4} primaryText="Juventus" />
                                <MenuItem value={5} primaryText="Liverpool" />
                                <MenuItem value={6} primaryText="Arsenal" />
                            </SelectField>
                        </div>
                        <div className="select_field">
                            <TextField
                                floatingLabelText="Score joueur 1"
                                floatingLabelStyle={{color: 'white'}}
                                textFieldStyle={{color: 'white'}}
                                style={styles.selectField}
                            />
                            <Chip style={styles.chip}>Score</Chip>
                            <TextField
                                floatingLabelText="Score joueur 2"
                                floatingLabelStyle={{color: 'white'}}
                                textFieldStyle={{color: 'white'}}
                                style={styles.selectField}
                            />
                        </div>
                        <div className="select_field">
                            <DatePicker hintText="Date" 
                                textFieldStyle={{color: 'white'}}
                            />
                        </div>
                        <RaisedButton
                            style={styles.button}
                            label="Lancer la recherche"
                            backgroundColor="#fcd21c"
                            icon={<SearchIcon className="muidocs-icon-search" />}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;
